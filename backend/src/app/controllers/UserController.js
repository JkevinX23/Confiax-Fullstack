import * as Yup from 'yup'
import User from '../models/User'

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      contact: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }
    const { email } = req.body

    const exists = await User.findOne({ where: { email } })
    if (exists) {
      return res.status(403).json({ error: 'User already exists.' })
    }

    let transaction
    
    try {
      transaction = await User.sequelize.transaction()
      
      const { id, name, email, contact } = await User.create(req.body, { transaction })
      
      await transaction.commit()
      
      return res.json({ id, name, email, contact })
    } catch (err) {
      console.log(err)
      await transaction.rollback()
      return res.status(409).json({ error: 'Insert failed' })
    }
  }

  async show(req, res) {
    const schema = Yup.object().shape({
        user_id: Yup.number().required(),
      })
    
    if (!(await schema.isValid(req.query))) {
        return res.status(400).json({ error: 'Validation fails' })
    }
    const { user_id } = req.query

    const user = await User.findByPk(user_id, {
      attributes: { exclude: ['password_hash', 'updatedAt'] }
    })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    return res.json(user)
  }

  async index(req,res) {
    const users = await User.findAll({ attributes: { exclude: ['password_hash', 'updatedAt']}})
    return res.json(users)
  }
}
export default new UserController()
