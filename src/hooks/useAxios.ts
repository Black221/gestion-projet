import {useEffect, useState} from "react";


const useAxios = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState<AbortController>();


    const axiosFetch: any = async (
        configObj: {
            axiosInstance: any,
            method: string,
            url: string,
            requestConfig?: any[]
        }
    )  => {

        setLoading(true);

        const ctrl = new AbortController();
        setController(ctrl);

        const {
            axiosInstance,
            method,
            url,
            requestConfig = []
        } = configObj;


        await  axiosInstance[method.toLowerCase()](url,
            ...requestConfig
        ).then( (res: any) => {
            setResponse(res.data);
        }).catch( (err: any) => {
            setError(err?.response?.data || "Error Server");
        }).finally (() => {
            setLoading(false);
        })
    }

    useEffect(() => {

        //useEffect cleanup function
        if (controller)
            return () => controller.abort()
    }, [controller])

    return [response, error, (loading), axiosFetch];
}

export default useAxios;