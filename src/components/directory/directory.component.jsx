import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component{

    constructor(){
        super();


        this.state ={

            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2
                },
                {
                    title: 'sneackers',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3,
                    
                },
                {
                    title: 'cane',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'cane',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 4,
                    size: 'large'
                },
            ]

        }


    }



    render(){
        return(
    <div className='directory-menu'>

        {
            this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
            ))
        }

    </div>
        )
    }


}



export default Directory;