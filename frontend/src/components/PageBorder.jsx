const PageBorder = () => {
	return (
		<div style={{
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            paddingbottom: '100%;',
            verticalalign: 'middle',
            overflow: 'hidden',
        }}>
			<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{
      stroke: 'none', fill: 'red', 
      }}></path>
  </svg>
		</div>
	);
};

export default PageBorder;
