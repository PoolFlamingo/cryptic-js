/**
 * 
 * @param {String} data 
 */
export function DataURLToBase64(data)
{
    data=data.replace(/^data:\w+\/\w+;base64,/, '');
    return data;
}