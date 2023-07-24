import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Boot = () => {
    return (<>
        <div className='text-center mt-5 text-success'>
            <h1 className='text-center text-capitalize text-danger'>Welcome You all Students...</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height='200px'/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className="card">
                            <img src='https://picsum.photos/200/302' className="card-img-top" alt="..." height='200px'/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height='200px' />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);

}
export default Boot;