import { useState, useEffect } from "react"
import { Table } from "../../components/Table"
import InputFile from "../../components/InputFile";

interface Data {
    [key: string]: string | number
}

interface Column {
    sort: (data: Data[], sens: boolean) => any;
    label: string
    name: string
}



export default function Upload() {
    const [files, setFiles] = useState<FileList | null>()
    const [data, setData] = useState<Data[]>([])
    const [tmp, setTmp] = useState<any[]>([])

    const [columns, setColumns] = useState<Column[]>([])

    const sort = (col:string) => (data: any[], sens: boolean) => {
        return data.sort((a, b) => {
            if (a[col] > b[col]) {
                return sens ? 1 : -1
            } else {
                return sens ? -1 : 1
            }
        })
    }

    const CSVToArray = (data: string, delimiter = ',', omitFirstRow = false) =>
        data
          .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
          .split('\n')
          .map(v => v.split(delimiter));

    useEffect(() => {
        if (files) {
            console.log(files)

            const reader = new FileReader()
            reader.onload = (e) => {
                const text = e.target?.result as string
                console.log(e.target);
                const data = CSVToArray(text, ';')
                data.map(row => {
                    //supress the '\r\n'
                    return row.map(column => column.replace('\r', ''))
                })
                const cols = data[0].map(col => {
                    const c: Column = { label: '', sort: sort(col), name: col }
                    c.label = col;
                    return c;
                })
                setColumns(cols)
                setTmp(data.slice(1))
            }
            reader.readAsText(files[0])
        }
    }, [files])


    useEffect(() => {
        if (tmp && columns) {
            console.log(tmp, columns)
            const d = tmp.map(row => {
                const obj: Data = {}
                row.map((col: string | number, index: number) => {
                    obj[columns[index].label] = col
                    return col
                })
                return obj
            })
            setData(d)
        }
    }, [tmp, columns])

    return (<>
        
        <div>

        </div>

        <InputFile getFiles={setFiles} />
        
        <Table label="Preview" data={data} columns={columns} actions={[]} />
    </>)
}