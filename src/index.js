import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './styles/style.css'
import Home from "./components/ui/Home"

window.React = React

render(
	routes,
	document.getElementById('react-container'))
