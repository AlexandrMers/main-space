import {useEffect} from "react";

function Home() {
    useEffect(() => {
        console.log('mount here!!!')
    }, []);

    return <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam asperiores aut deleniti error exercitationem facilis fuga natus nobis odio officia optio repudiandae. A aliquam at consequuntur cupiditate deserunt distinctio eum illum itaque laudantium minima pariatur placeat, provident quia repellat, sint totam vel? Commodi consequatur, distinctio exercitationem numquam quae quia?
    </div>
}

export default Home;