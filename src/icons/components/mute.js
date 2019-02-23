import React from 'react'
import Icon from './icon'

// --- componente presentacional o tonto o funcional
function Mute(props){
	return (
		<Icon {...props}>
			<path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
			<path d="M 18.923828 8.7285156 A 1.50015 1.50015 0 0 0 17.878906 11.304688 L 22.203125 15.628906 L 17.878906 19.953125 A 1.50015 1.50015 0 1 0 20 22.074219 L 24.324219 17.75 L 28.648438 22.074219 A 1.50015 1.50015 0 1 0 30.769531 19.953125 L 26.445312 15.628906 L 30.769531 11.304688 A 1.50015 1.50015 0 0 0 29.679688 8.7304688 A 1.50015 1.50015 0 0 0 28.648438 9.1835938 L 24.324219 13.507812 L 20 9.1835938 A 1.50015 1.50015 0 0 0 18.923828 8.7285156 z "></path>
		</Icon>
	)
}

export default Mute;