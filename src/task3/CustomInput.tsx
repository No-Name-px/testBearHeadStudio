import React, { useCallback, useState } from "react";
import debounce from "./debounce";

export default function CustomInput() {
    const [value, setValue] = useState("");
    const handlerChangeValue = useCallback(
        debounce((val: string) => {
            console.log(val);
            setValue(val);
        }, 1000),
        [setValue]
    );

    return (
        <div>
            <input
                onChange={(e) => handlerChangeValue(e.target.value)}
                type="text"
            />
        </div>
    );
}
