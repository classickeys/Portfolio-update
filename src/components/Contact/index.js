import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Contact = () => {

    const refForm = useRef();

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_f0ot6er', 'template_fx6qtt7', refForm.current, {
                publicKey: 'Zc26AO0PG9Vrkgspv',
            })
            .then(
                () => {
                    alert('SUCCESS!');

                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send message...', error.text);
                },
            );
    };




    return (
        <>

            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact Me'.split("")}
                            idx={15} />
                    </h1>

                    <p>
                        I am interested in development opportunities — use the contact form to get in touch if you have any requests, ideas, or queries!
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li className='half'>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Kelechi Nwachukwu
                    <br />
                    South Africa,
                    <br />
                    Willows 34, 9301 <br />
                    Free State<br />
                    <span>kidkmen@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-29.1129, 26.2149]} zoom={13} className="map-container">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[-29.1129, 26.2149]}>
                            <Popup maxWidth={200} minWidth={150} className="custom-popup"  >
                                I live here, let us have coffee.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>



            </div>
            <Loader type='pacman' />
        </>


    )
}
export default Contact