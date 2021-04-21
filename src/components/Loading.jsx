import reactDom from "react-dom";
import Loading from "react-loading";

export default function CustomLoading() {
    return reactDom.createPortal(
        <Loading color='#00afab' type='cylon' />
        , document.getElementById('root2')
    )
}