import SignUp from "../components/SignUp/SignUp";
import Q1 from "../components/Q1/Q1";

const displaysPage = () => {
    // return <div>Estoy Aqui</div>
    let page
    switch (page) {
        case 0:
            return (<SignUp />);

        case 1:
            return <Q1 />

        default:
            console.log('out')
    }
};

module.exports = displaysPage