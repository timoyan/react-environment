import React from 'react';

class NewsList extends React.Component{
    render(){
        return(
            <div className="NewsContainer">
                <div className="NewsItem">
                    News1
                </div>
                <div className="NewsItem">
                News2
                </div>
                <div className="NewsItem">
                News3
                </div>
            </div>
        );
    };
}

export default NewsList;