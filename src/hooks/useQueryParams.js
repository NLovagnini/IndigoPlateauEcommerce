import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

export const useQueryParams = () => {

    const [queries, setQueries] = useState('placehold');
    const {search} = useLocation();
  
    useEffect(() => {

        const decryptSearchString = (params) => {

  
            const stringSplit = params.replace('?', '');
            const spacedString = stringSplit.replaceAll('+', ' ').replaceAll('%2F', '/');
            const splittedString = spacedString.split('=')
            const splittedShift = splittedString.shift();  // eslint-disable-line

            let finalString = Object.values(splittedString).toString()
        //    paramsArray.forEach(query => {
        //        const [key, value] = query.split('=');
        //        Object.assign(formattedQuery, {
        //            [key] : value
        //        })
        //    });
        
            if(finalString === '' || undefined){
                finalString = 'no-undef'
            }
           setQueries(finalString)
           
        }
     
        if(search !== undefined){
            decryptSearchString(search)  
        }

    }, [search]) // eslint-disable-line
  return (queries)
}
