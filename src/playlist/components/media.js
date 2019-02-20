import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
    // En ECMA SCRIPT 6 era necesario enlazar las propiedades de los elementos
    // a la clase para poder usarlas en las funciones internas. 
    // La sintaxis era la siguiente: 

    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //     this.state = {
    //         author: props.author
    //     }
    // }
    
    // handleClick(event) {
            // Propiedad title enlazada: 
        // console.log(this.props.title);    
    // }

    // Valor inicial del estado:
    state = {
        author: 'Misael Duarte'
    }

    // Con el soporte del ECMA SCRIPT mas reciente se puede simplificar todo
    // usando una arrow function:
    // handleClick = (event) => {
        // console.log(this.props.title);
        // this.setState({
            // author: 'Otro autor'
        // })
    // }
    render() {
        // const styles =  {
        //     container : {
        //         color: '#44546b',
        //         cursor: 'pointer',
        //         width: 260,
        //         border: '1px solid blue'
        //     }   
        // }
        return (
            // Importado de estilos desde fichero CSS externo:
            <div className='Media' onClick={this.props.handleClick}>
                <div className= 'Media-cover'>
                    <img 
                        className = 'Media-image'
                        src={this.props.cover}
                        alt="Imagen de  miniatura del elemento"
                        width={240}
                        height={160}
                    />
                </div>
                <h3 className='Media-title'> {this.props.title}</h3>
                {/* <p className='Media-author'>{this.state.author}</p> */}
                <p className='Media-author'>{this.props.author}</p>
            </div>

            // Forma clasica de estilos en linea: 
            // <div style={styles.container}>
            //     <div>
            //         <img 
            //             src='./images/covers/bitcoin.jpg'
            //             alt="Imagen de  miniatura del elemento"
            //             width={260}
            //             height={160}
            //         />
            //     </div>
            //     <h3> Aprender React</h3>
            //     <p>Misael Duarte</p>
            // </div>

        )
    }
}

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf([ 'video', 'audio']),
}
export default Media;