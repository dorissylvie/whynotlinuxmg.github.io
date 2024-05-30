
import ButtonFill from "../components/ButtonFill";
import Vector from '../assets/images/Vector.png'
import QR from '../assets/images/qr_code.png'
const Hero = () => {
    return (
        <div className="grid mt-4 max-w-[1700px] mx-auto px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className='mr-auto place-self-center lg:col-span-7 '>
                <ButtonFill content="22 Juin 2024" />
                <div className="backtitle">
                    <h1 class="max-w-2xl mb-4 text-[38px] md:text-[78px] Kontes-Compressed-Bold font-extrabold tracking-tight leading-none xl:text-7xl text-white">Empowering Communities</h1>
                    <h1 className='Kontes-Compressed-Bold text-[38px] md:text-[78px] text-white pl-3 md:pl-0'>Through <span className="color-raven">Open Source</span></h1>
                </div>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">Explorez le pouvoir transformateur de Linux. Rejoignez-nous pour découvrir son potentiel illimité lors de cet événement incontournable..</p>
                <div className=' bg-white  rounded-md items-center justify-center  inline-flex items-center justify-center px-5 py-3 mr-3'>
                    <button className='text-dark capitalize mr-6 font-DMMono'>Obtenir un billet</button>
                    <img className='object-contain' src={Vector} alt="" />
                </div>

                <div className=' border border-raven  rounded-md items-center justify-center  inline-flex items-center justify-center px-5 py-3 '>
                    <button className='text-white capitalize mr-6 font-DMMono'>devenir sponsor</button>
                    <img className='object-contain' src={Vector} alt="" />
                </div>
            </div>

            <div class="hidden lg:mt-0 lg:col-span-5 lg:inline-flex">
                <img src={QR} alt="qr"  width={100}/>
            </div>
        </div>
    );
}

export default Hero;
