
import homeLogo from '../../assets/blog.svg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-black flex justify-center py-6">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Welcome!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/5' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;