import { HashRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../Header'
import { PrincipalMain } from '../PrincipalMain'
import { Introduction } from '../Introduction'
import { Presentation } from '../Presentation'
import { Services } from '../Services'
import { Testimonials } from '../Testimonials'
import { Form } from '../Form'
import { Footer } from '../Footer'
import { Experiences } from '../Experiencias'

function AppUI() {
    return (
        <>
            <HashRouter>
                <Header />
                <Introduction />
                <Routes>
                    <Route path='/' element={
                        <PrincipalMain>
                            <Presentation />
                            <Services />
                        </PrincipalMain>
                    } />
                    <Route path='/testimonios' element={<Testimonials />} />
                    <Route path='/solicitaInformacion' element={<Form />} />
                    <Route path='/experiencias' element={<Experiences />} />
                    <Route path="*" element={<p>Not Found</p>} />
                </Routes>
                <Footer />
            </HashRouter>
        </>
    )
}

export { AppUI }