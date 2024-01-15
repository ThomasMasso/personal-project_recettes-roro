import logo from '../../assets/logo.png'
import CtaNav from '../../components/CtaNav'

export default function Home() {
    return (
        <>
            <img src={logo} alt='logo site' />
            <CtaNav title='RECETTES  DE  RORO' />
            <CtaNav title='VOS  RECETTES' />
            <CtaNav title='TRUCS  &  ASTUCES' />
            <CtaNav title='CONTACT' />
        </>
    )
  }
  