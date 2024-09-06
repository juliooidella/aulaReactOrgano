import './Rodape.css'


const Rodape = () => {

    return (
        <footer className='rodape'>
            <div className='rodape-midias'>
                <img src="/imagens/fb.png" alt='Facebook' className='icon-midias'/>
                <img src="/imagens/tw.png" alt='Twitter' className='icon-midias'/>
                <img src="/imagens/ig.png" alt='Instagram' className='icon-midias'/>
            </div>
            <div>
                <img src="/imagens/logo.png" className='logo'/>
            </div>
            <div className='rodape-creditos'>Desenvolvido por Julio Cezar Oidella</div>
            
        </footer>
    )

}

export default Rodape