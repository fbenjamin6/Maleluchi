import { init, send } from '@emailjs/browser'
import { useState, useEffect } from 'react'

export function useForm() {
  const [nameValue, setNameValue] = useState('')
  const [localidadValue, setLocalidadValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [telValue, setTelValue] = useState('')
  const [consultaValue, setConsultaValue] = useState('')
  const [honeyPot, setHoneyPot] = useState('')

  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const [token, setToken] = useState(null)

  const [btnState, setBtnState] = useState(true)

  useEffect(() => {
    window.onTurnstileSuccess = function (t) {
      setToken(t)
    }
    init('Km_Qa2yhQpFFyOfn-')
  }, [])

  const params = {
    name: nameValue,
    localidad: localidadValue,
    email: emailValue,
    tel: telValue,
    consulta: consultaValue,
  }

  const phoneRegex = /^(?:\+54\s?)?(?:9?\s?)?(?:\d{2,4}\s?)?\d{6,8}$/

  function handleEmail(e: any) {
    e.preventDefault()
    if (!btnState || honeyPot || !token) return

    setBtnState(false)

    if (
      !phoneRegex.test(telValue) ||
      telValue.length < 8 ||
      telValue.length > 14
    ) {
      setStatus('error')
      setMessage('Ingresá un número de teléfono válido')
      setTimeout(() => setStatus(''), 3000)
      setBtnState(true)
      return
    }

    send('service_9jvrcm6', 'template_ou7dq1g', params).then(
      (response) => {
        setStatus('success')
        setMessage('Mensaje enviado correctamente')

        setBtnState(true)

        setNameValue('')
        setLocalidadValue('')
        setEmailValue('')
        setTelValue('')
        setConsultaValue('')
        setToken(null)

        setTimeout(() => setStatus(''), 3000)
      },
      (error) => {
        setStatus('error')
        setMessage('Hubo un error al enviar el mensaje')

        setBtnState(true)

        setTimeout(() => setStatus(''), 3000)
      },
    )
  }

  return {
    handleEmail,
    message,
    status,
    btnState,
    honeyPot,
    setHoneyPot,
    nameValue,
    setNameValue,
    telValue,
    setTelValue,
    emailValue,
    setEmailValue,
    localidadValue,
    setLocalidadValue,
    consultaValue,
    setConsultaValue,
  }
}
