export const SliderGallery=(props)=>{
    const display={
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    function close(){
        props.setClose(false);
        document.body.style.marginLeft = '2%';
        document.body.style.marginRight = '2%';
    }
    return(
        <>
            {
                props.display &&
                <div style={ display } className="slider-gallery">
                    <img src={props.choise} alt="scenery" /><span className="close-slider" onClick={close}>X</span>
                </div>
            }
        </>
    );
}