import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({repo}) => {
    return (
            <Fragment>
                <div className="row">
                   <div className="col-md-12">
                            <h4 className="">
                                <a href={repo.html_url}>
                                    {repo.name}
                                </a>
                            </h4>
                    </div>
                   </div>
             </Fragment>
    );
}

RepoItem.propTypes = {
    repos:PropTypes.object.isRequired
}


export default RepoItem;