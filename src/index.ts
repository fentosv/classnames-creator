export default function classnames(...params: unknown[]): string {

    const dataArr = new Set<string>();

    for (const param of params) {
        // string
        if (typeof param === 'string' && param.length > 0) {
            dataArr.add(param)
        }
        // object & array
        else if (typeof param === 'object') {
            // array
            if (Array.isArray(param)) {
                for (const e of param) {
                    if (e)
                        dataArr.add(e)
                }
            }
            // object
            else {
                for (const key in param) {
                    if (param[key]) {
                        dataArr.add(key)
                    }
                }
            }
        }
    }
    return Array.from(dataArr).join(' ')
}
