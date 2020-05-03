/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 14:35:16
 * @last Modified time: 2020-05-03 14:35:16
 */
import React, {useEffect} from 'react';


export default function (props) {

    const {value, onChange, options = []} = props;

    console.log(options);

    const handleOnChangle = (event) => {
        // 触发一个dispatch

        console.log('picker on  change ', event.target.value);
        onChange(event.target.value);

    };

    useEffect(() => {
        // request one time at did mount
        onChange(value);
    }, []);



    return (
        <div>
            <h3>{value}</h3>
            <select option={value} onChange={handleOnChangle}>
                {
                    options.map((option, index) => <option value={option} key={index}>{option}</option>)
                }

            </select>

        </div>
    );
}
