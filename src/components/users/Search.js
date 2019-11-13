import React, { useState, useContext} from "react";
import GithubContext from '../../context/gihub/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('please enter something', 'red')
    } else {
      githubContext.searchUsers(text);
      setText('')
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="text"
          type="text"
          value={text}
          onChange={onChange}
        ></input>
        <input type="submit" />
      </form>
      {githubContext.users.length > 0 && (
        <button onClick={githubContext.clearUsers}>clear</button>
      )}
    </div>
  );

}

export default Search;
