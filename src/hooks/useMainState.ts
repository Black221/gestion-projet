import { useContext } from "react";
import { MainContext } from "../providers/MainProvider";

export function useMainState  () {
    const context = useContext(MainContext);
    if (context === undefined) {
        throw new Error('useMainState must be used within a MainProvider');
    }
    return context;
}