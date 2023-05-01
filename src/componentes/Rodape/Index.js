import './Rodape.css'

const Rodape = ()=>{
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src="imagens/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank">
                            <img src="imagens/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https:/ instagram.com" target="_blank">
                            <img src='imagens/imagens/ig.png' alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='imagem'>
                <img src='imagens/imagens/logo.png'></img>

            </section>
            <section className='texto'>
                <p>Desenvolvido por Alura</p>
            </section>

        </footer>
    )
}

export default Rodape