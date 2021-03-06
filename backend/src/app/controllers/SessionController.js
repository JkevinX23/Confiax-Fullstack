import * as Yup from 'yup'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/authConfig'
import User from '../models/User'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }
    const { email, password } = req.body
    const user  = await User.findOne({where: { email }})
    if(!user){
        return res.status(403).json({error: 'Invalid credentials '})
    }
    if (!(await user.checkPassword(password)))
        return res.status(403).json({error: 'Invalid credentials '})
    const { id, name } = user
    return res.json({
    client: {
        id,
        name,
        email,
    },
    token: jwt.sign({ id }, authConfig.secret),
    })
}

}
export default new SessionController()
