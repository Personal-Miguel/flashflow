// eslint-disable-next-line react/prop-types
export function AddGearIcon({ width = '50px', height = '50px', colour = '#FFFFFF'}): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		  <div className="grid place-items-center">
			<svg 
			xmlns="http://www.w3.org/2000/svg"  
			version="1.1" 
			width={width}
			height={height}
			fill={colour}
			x="0px" 
			y="0px" 
			viewBox="0 0 100 100">
				<path 
				d="M90,55L90,45L79.63,43.139L75.803,33.9L81.82,25.251L74.749,18.18L66.1,24.197L56.861,20.37L55,10L45,10L43.139,20.37L33.9,24.197L25.251,18.18L18.18,25.251L24.197,33.9L20.37,43.139L10,45L10,55L20.37,56.861L24.197,66.1L18.18,74.749L25.251,81.82L33.9,75.803L43.139,79.63L45,90L55,90L56.861,79.63L66.1,75.803L74.749,81.82L81.82,74.749L75.803,66.1L79.63,56.861L90,55ZM50,70C38.954,70,30,61.046,30,50C30,38.954,38.954,30,50,30S70,38.954,70,50C70,61.046,61.046,70,50,70Z" 
				stroke="none">
				</path>
			</svg>
		  </div>
		</div>
	  )
	}
	


export function AddExponentIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className="hover:cursor-pointer hover:opacity-40">
		<div>
		<svg 
		version="1.1" 
		id="Capa_1" 
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 31.773 31.773" 
		width={width}
		height={height}
		fill={colour}>
			<g id="SVGRepo_bgCarrier" 
			stroke-width="0"></g><g 
			id="SVGRepo_tracerCarrier" 
			stroke-linecap="round" 
			stroke-linejoin="round" 
			stroke="#CCCCCC" 
			stroke-width="1.398012">
			</g>
			<g id="SVGRepo_iconCarrier"> 
			<g> 
			<path d="M15.383,18.945l7.761,12.506h-5.398l-3.48-5.825c-0.533-0.9-1.041-1.812-1.527-2.736l-0.498-0.959l-0.515-0.941h-0.07 l-0.515,0.959c-0.617,1.162-1.315,2.389-2.099,3.68l-3.498,5.826H0l7.959-12.508L0.57,7.206h5.489l3.23,5.399 c0.512,0.854,0.989,1.693,1.438,2.521l0.445,0.852l0.442,0.855h0.07c0.201-0.379,0.35-0.663,0.445-0.855l0.442-0.834 c0.379-0.733,0.854-1.574,1.422-2.521l3.231-5.418h5.436L15.383,18.945z M25.164,10.014c0-0.82,0.111-1.316,0.334-1.49 c0.223-0.176,1.02-0.387,2.393-0.637c1.664-0.309,2.729-0.693,3.189-1.15c0.461-0.459,0.689-1.366,0.689-2.723 c0-1.436-0.303-2.41-0.908-2.924c-0.607-0.512-1.762-0.771-3.457-0.771c-1.738,0-2.91,0.255-3.516,0.763 c-0.604,0.506-0.906,1.492-0.906,2.957v0.485h2.174V4.03c0-0.85,0.127-1.385,0.383-1.604c0.258-0.219,0.875-0.33,1.854-0.33 c0.953,0,1.557,0.109,1.811,0.326c0.254,0.217,0.381,0.729,0.381,1.539c0,0.842-0.127,1.365-0.381,1.567 c-0.254,0.201-1.066,0.427-2.439,0.671c-1.658,0.297-2.709,0.646-3.15,1.051c-0.439,0.405-0.66,1.225-0.66,2.455v2.377h8.82v-1.754 h-6.607L25.164,10.014L25.164,10.014z"></path> </g> </g></svg>
		</div>
		</div>
	)
}

export function AddSubscriptIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		version="1.1" 
		width={width}
		height={height}
		fill={colour}
		id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 32.52 32.52" 
		><g id="SVGRepo_bgCarrier" stroke-width="0">
			</g>
			<g id="SVGRepo_tracerCarrier" 
			stroke-linecap="round" 
			stroke-linejoin="round">
				</g>
				<g id="SVGRepo_iconCarrier"> 
				<g> <path d="M22.662,1.194l-7.282,11.74l7.762,12.506h-5.397l-3.481-5.826c-0.532-0.898-1.042-1.812-1.528-2.735l-0.496-0.959 l-0.516-0.941h-0.07l-0.516,0.959c-0.616,1.163-1.314,2.387-2.098,3.678l-3.498,5.826H0l7.958-12.506L0.569,1.195h5.487l3.231,5.4 c0.511,0.852,0.99,1.693,1.438,2.521l0.445,0.852l0.444,0.854h0.069c0.201-0.379,0.349-0.662,0.444-0.854l0.443-0.834 c0.379-0.734,0.854-1.574,1.422-2.521l3.232-5.418L22.662,1.194L22.662,1.194z M32.52,29.571v1.754h-8.82v-2.377 c0-1.229,0.222-2.049,0.662-2.455c0.441-0.402,1.492-0.754,3.15-1.051c1.373-0.244,2.186-0.471,2.439-0.67 c0.254-0.203,0.379-0.729,0.379-1.568c0-0.811-0.125-1.32-0.379-1.537c-0.254-0.219-0.855-0.326-1.81-0.326 c-0.979,0-1.6,0.109-1.854,0.33c-0.256,0.219-0.385,0.754-0.385,1.604v0.494H23.73v-0.486c0-1.465,0.303-2.451,0.905-2.957 c0.604-0.508,1.774-0.762,3.515-0.762c1.696,0,2.852,0.258,3.457,0.77c0.606,0.514,0.911,1.488,0.911,2.924 c0,1.355-0.231,2.265-0.692,2.724c-0.461,0.456-1.523,0.843-3.188,1.149c-1.373,0.25-2.17,0.461-2.396,0.637 c-0.223,0.176-0.332,0.67-0.332,1.49v0.316L32.52,29.571L32.52,29.571z"></path> </g> </g></svg>
	
		</div>
		</div>
	)
}

export function AddMarkerIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		version="1.1" 
		id="_x32_" 
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 512 512" 
		width={width}
		height={height}
		fill={colour}><g 
		id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g 
		id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" 
		stroke-linejoin="round"></g><g 
		id="SVGRepo_iconCarrier"> 
		<g> 
			<path  d="M208.125,399.449c0,0,9.656-15.703,21.266-34.563L75.469,270.152c-11.609,18.859-21.281,34.563-21.281,34.563 s27.797,60.406-9.906,121.656l29.844,18.375l29.844,18.375C141.656,401.855,208.125,399.449,208.125,399.449z"></path> <path  d="M389.531,104.684c6.031-9.828,2.984-22.719-6.859-28.781L264.359,3.105 c-9.828-6.047-22.703-2.984-28.766,6.844L83.188,257.59l153.938,94.719L389.531,104.684z"></path> <polygon points="22.531,488.637 74.188,488.637 87.484,467.043 48.219,442.871 "></polygon> <path d="M482.406,484.449H117.844c-3.906,0-7.063,3.156-7.063,7.063v13.438c0,3.891,3.156,7.047,7.063,7.047h364.563 c3.906,0,7.063-3.156,7.063-7.047v-13.438C489.469,487.605,486.313,484.449,482.406,484.449z"></path> </g> </g></svg>
		</div>
		</div>
	)
}


export function AddEraserIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		viewBox="0 0 24 24" 
		width={width}
		height={height}
		fill={colour} 
		xmlns="http://www.w3.org/2000/svg"><g 
		id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g 
		id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" 
		stroke-linejoin="round"></g><g 
		id="SVGRepo_iconCarrier"> <path 
		d="M11.4096 5.50506C13.0796 3.83502 13.9146 3 14.9522 3C15.9899 3 16.8249 3.83502 18.4949 5.50506C20.165 7.1751 21 8.01013 21 9.04776C21 10.0854 20.165 10.9204 18.4949 12.5904L14.3017 16.7837L7.21634 9.69828L11.4096 5.50506Z" ></path> <path d="M6.1557 10.759L13.2411 17.8443L12.5904 18.4949C12.2127 18.8727 11.8777 19.2077 11.5734 19.5H21C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9C7.98423 20.9747 7.1494 20.1393 5.50506 18.4949C3.83502 16.8249 3 15.9899 3 14.9522C3 13.9146 3.83502 13.0796 5.50506 11.4096L6.1557 10.759Z" ></path> </g></svg></div>
		</div>
	)
}

export function AddListIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		viewBox="0 0 24 24" 
		width={width}
		height={height}
		fill={colour}
		xmlns="http://www.w3.org/2000/svg" 
		stroke="#ffffff"><g id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" stroke-linejoin="round"></g><g 
		id="SVGRepo_iconCarrier"> <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" 
		stroke="#ffffff" 
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
		</div>
	)
}

export function AddNumberedListIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		width={width}
		height={height}
		fill={colour}  
		viewBox="0 0 56 56" 
		xmlns="http://www.w3.org/2000/svg"><g 
		id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g 
		id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" 
		stroke-linejoin="round"></g><g 
		id="SVGRepo_iconCarrier">
		<path d="M 9.4960 19.0117 C 10.4101 19.0117 11.0195 18.4961 11.0195 17.4414 L 11.0195 9.8711 C 11.0195 8.8867 10.3164 8.2539 9.3086 8.2539 C 8.4648 8.2539 7.9492 8.5351 7.3632 8.9336 L 5.7226 10.0820 C 5.2304 10.4102 4.9726 10.7148 4.9726 11.2070 C 4.9726 11.8164 5.4648 12.2383 6.0039 12.2383 C 6.2851 12.2383 6.4492 12.1914 6.8476 11.9102 L 7.9257 11.1836 L 7.9492 11.1836 L 7.9492 17.4414 C 7.9492 18.4961 8.5820 19.0117 9.4960 19.0117 Z M 17.6289 16.1758 L 49.7149 16.1758 C 50.7930 16.1758 51.6133 15.3555 51.6133 14.3008 C 51.6133 13.2226 50.7930 12.4024 49.7149 12.4024 L 17.6289 12.4024 C 16.5742 12.4024 15.7539 13.2226 15.7539 14.3008 C 15.7539 15.3555 16.5742 16.1758 17.6289 16.1758 Z M 5.7226 33.1445 L 11.7460 33.1445 C 12.4023 33.1445 12.8711 32.6992 12.8711 32.0430 C 12.8711 31.3398 12.4023 30.8945 11.7460 30.8945 L 8.3945 30.8945 L 8.3945 30.8242 L 10.3164 29.2773 C 11.9335 27.9648 12.5429 27.2148 12.5429 25.8320 C 12.5429 23.9570 10.9726 22.6914 8.4413 22.6914 C 6.2148 22.6914 4.5742 23.8633 4.5742 25.3633 C 4.5742 26.1133 5.0664 26.5117 5.8632 26.5117 C 6.4023 26.5117 6.7773 26.3477 7.0820 25.8086 C 7.4101 25.2461 7.8554 24.9414 8.4882 24.9414 C 9.1913 24.9414 9.6601 25.3867 9.6601 26.0430 C 9.6601 26.6055 9.3789 27.0977 8.1835 28.0586 L 5.0898 30.5898 C 4.6445 30.9648 4.4570 31.3867 4.4570 31.9024 C 4.4570 32.6289 4.9492 33.1445 5.7226 33.1445 Z M 17.6289 30.3555 L 49.7149 30.3555 C 50.7930 30.3555 51.6133 29.5117 51.6133 28.4570 C 51.6133 27.4024 50.7930 26.5820 49.7149 26.5820 L 17.6289 26.5820 C 16.5742 26.5820 15.7539 27.4024 15.7539 28.4570 C 15.7539 29.5117 16.5742 30.3555 17.6289 30.3555 Z M 8.5117 47.7461 C 11.2773 47.7461 12.9413 46.5039 12.9413 44.5352 C 12.9413 43.2461 12.0273 42.3555 10.4101 42.2148 L 10.4101 42.1445 C 11.6054 41.9336 12.5195 41.1367 12.5195 39.7773 C 12.5195 37.9961 10.7851 37.0117 8.4882 37.0117 C 6.6367 37.0117 4.6445 37.8789 4.6445 39.4258 C 4.6445 40.0820 5.1132 40.5508 5.8398 40.5508 C 6.3554 40.5508 6.5898 40.3398 6.9179 39.9883 C 7.4570 39.4024 7.9023 39.2148 8.4648 39.2148 C 9.1913 39.2148 9.7304 39.5664 9.7304 40.2695 C 9.7304 40.9258 9.1913 41.2539 8.2304 41.2539 L 7.9492 41.2539 C 7.2929 41.2539 6.8711 41.5820 6.8711 42.2617 C 6.8711 42.8945 7.2695 43.2695 7.9492 43.2695 L 8.2539 43.2695 C 9.3086 43.2695 9.8711 43.6211 9.8711 44.3477 C 9.8711 44.9805 9.2851 45.4492 8.5117 45.4492 C 7.6679 45.4492 7.0820 44.9805 6.6367 44.5352 C 6.3554 44.2773 6.1211 44.0898 5.6992 44.0898 C 4.9257 44.0898 4.3867 44.5352 4.3867 45.2617 C 4.3867 46.8789 6.5898 47.7461 8.5117 47.7461 Z M 17.6289 44.5117 L 49.7149 44.5117 C 50.7930 44.5117 51.6133 43.6914 51.6133 42.6367 C 51.6133 41.5586 50.7930 40.7383 49.7149 40.7383 L 17.6289 40.7383 C 16.5742 40.7383 15.7539 41.5586 15.7539 42.6367 C 15.7539 43.6914 16.5742 44.5117 17.6289 44.5117 Z"></path></g></svg></div>
		</div>
	)
}

export function AddParagraphIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		width={width}
		height={height}
		fill={colour} 
		viewBox="0 0 24 24" 
		xmlns="http://www.w3.org/2000/svg"><g 
		id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g 
		id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" 
		stroke-linejoin="round"></g><g 
		id="SVGRepo_iconCarrier"><path d="M22,3a1,1,0,0,1-1,1H9A1,1,0,0,1,9,2H21A1,1,0,0,1,22,3ZM21,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></g></svg></div>
		</div>
	)
}

export function AddClipIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		width={width}
		height={height}
		fill={colour} 
		viewBox="0 0 32 32" 
		version="1.1" 
		xmlns="http://www.w3.org/2000/svg" 
		stroke="#ffffff"><g id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" stroke-linejoin="round"></g>
		<g id="SVGRepo_iconCarrier"> 
		<path d="M23.113 7.248h-0.002c0 0 0 0 0 0-0.689 0-1.248 0.558-1.25 1.247v0l-0.029 14.198c0.008 0.114 0.013 0.247 0.013 0.381 0 3.118-2.528 5.646-5.646 5.646-0.071 0-0.142-0.001-0.212-0.004l0.010 0h-0.014c-0.063 0.003-0.138 0.004-0.213 0.004-3.117 0-5.643-2.527-5.643-5.643 0-0.126 0.004-0.25 0.012-0.374l-0.001 0.017v-15.516c-0.004-0.063-0.006-0.136-0.006-0.21 0-2.054 1.665-3.719 3.719-3.719 0.074 0 0.147 0.002 0.219 0.006l-0.010-0c0.063-0.004 0.136-0.006 0.21-0.006 2.053 0 3.717 1.664 3.717 3.717 0 0.073-0.002 0.145-0.006 0.217l0-0.010-0.057 14.272c0.002 0.045 0.004 0.097 0.004 0.15 0 0.719-0.259 1.378-0.689 1.887l0.004-0.004c-0.332 0.333-0.788 0.544-1.293 0.557l-0.002 0c-0.51-0.006-0.966-0.228-1.284-0.578l-0.001-0.002c-0.407-0.5-0.654-1.145-0.654-1.847 0-0.073 0.003-0.145 0.008-0.217l-0.001 0.010v-10.344c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10.332c-0.018 0.153-0.028 0.33-0.028 0.51 0 2.491 1.964 4.524 4.428 4.634l0.010 0 0.038 0.002c0.003 0 0.006 0 0.009 0 1.214 0 2.308-0.512 3.078-1.332l0.002-0.002c0.852-0.937 1.374-2.189 1.374-3.561 0-0.062-0.001-0.124-0.003-0.186l0 0.009 0.057-14.285c0-8.434-12.844-8.434-12.844 0v15.518c-0.003 0.083-0.005 0.18-0.005 0.277 0 2.4 1.015 4.564 2.64 6.084l0.005 0.004c1.485 1.322 3.452 2.129 5.608 2.129 0.034 0 0.068-0 0.102-0.001l-0.005 0h0.019c0.025 0 0.054 0 0.083 0 2.168 0 4.146-0.817 5.642-2.16l-0.008 0.007c1.614-1.523 2.619-3.676 2.619-6.064 0-0.108-0.002-0.215-0.006-0.322l0 0.015 0.029-14.192c0-0.001 0-0.002 0-0.004 0-0.69-0.559-1.249-1.248-1.249h-0z"></path> </g>
		</svg></div>
		</div>
	)
}


export function AddMicIcon({ width = '50px', height = '50px', colour = '#FFFFFF' }): JSX.Element {
	return (
		<div className=" flex flex-row hover:cursor-pointer hover:opacity-40">
		<div className="grid place-items-center">
		<svg 
		viewBox="0 0 24 24" 
		width={width}
		height={height}
		fill={colour} 
		xmlns="http://www.w3.org/2000/svg"><g 
		id="SVGRepo_bgCarrier" 
		stroke-width="0"></g><g 
		id="SVGRepo_tracerCarrier" 
		stroke-linecap="round" 
		stroke-linejoin="round"></g><g 
		id="SVGRepo_iconCarrier"> 
		<path d="M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V5Z" 
		></path> <path d="M6.25 11.8438V12C6.25 13.525 6.8558 14.9875 7.93414 16.0659C9.01247 17.1442 10.475 17.75 12 17.75C13.525 17.75 14.9875 17.1442 16.0659 16.0659C17.1442 14.9875 17.75 13.525 17.75 12V11.8438C17.75 11.2915 18.1977 10.8438 18.75 10.8438H19.25C19.8023 10.8438 20.25 11.2915 20.25 11.8437V12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.5842 19.0831 14.9753 19.8903 13.25 20.1548V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V20.1548C9.02471 19.8903 7.41579 19.0831 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12V11.8438C3.75 11.2915 4.19772 10.8438 4.75 10.8438H5.25C5.80228 10.8438 6.25 11.2915 6.25 11.8438Z"></path> </g></svg></div>
		</div>
	)
}

	
	
		
		  
	