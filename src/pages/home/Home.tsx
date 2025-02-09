import homeLogo from '../../assets/blog_branco.svg'
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';


function Home() {
    return (
        <>
        <div className="bg-black flex justify-center py-6">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Welcome to...</h2>
                
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              
            
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/5' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      
      </>
    );
}

export default Home;