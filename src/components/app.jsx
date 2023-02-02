import React, {useState} from 'react';
import Headers from "./common/headers";
import Footers from "./common/footers";

//For Others route calling this layout
export default function Layout({children}) {

    const [dataSelected, setDataSelected] = useState(null)

    console.log(dataSelected)

    const selectData = (item) => {
        setDataSelected(item)
    }

        return (
            <>
                <Headers/>
                {children}
                <Footers/>
            </>
        );
}

;
