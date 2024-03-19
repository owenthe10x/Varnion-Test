'use client'

import {useState, useLayoutEffect} from 'react'
import {createPortal} from 'react-dom'
import {ReactElement} from 'react'
import React from 'react'
function createWrapperAndAppendToBody(wrapperID: string) {
	if (!document) return null
	const wrapperElement = document.createElement('div')
	wrapperElement.setAttribute('id', wrapperID)
	document.body.appendChild(wrapperElement)
	return wrapperElement
}

function Portal({
	children,
	wrapperID,
}: {
	children: React.ReactElement
	wrapperID: string
}) {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement>(
		document.createElement('div')
	)

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperID)
		let systemCreated = false
		// if element is not found with wrapperID or wrapperID is not provided,
		// create and append to body
		if (!element) {
			systemCreated = true
			element = createWrapperAndAppendToBody(wrapperID)
		}
		setWrapperElement(element!)

		return () => {
			// delete the programatically created element
			if (systemCreated && element?.parentNode) {
				element.parentNode.removeChild(element)
			}
		}
	}, [wrapperID])

	// wrapperElement state will be null on the very first render.
	if (wrapperElement === null) return null

	return createPortal(children, wrapperElement)
}

export default Portal
