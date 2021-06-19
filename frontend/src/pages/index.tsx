import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/Login')
  }, [])

  return (
    <div style={{ background: "linear-gradient(180deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%);"}}>
      <h1> Bem Vindo </h1>
    </div>
  )
}
