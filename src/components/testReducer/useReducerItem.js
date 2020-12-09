import React, { useReducer } from 'react';
import { Label } from 'reactstrap';
import Handle from './Reducer';

function UseReducerItem() {
    const initialTodos = [
        {
          id: 'a',
          task: 'Learn React',
          complete: false,
        },
        {
          id: 'b',
          task: 'Learn Firebase',
          complete: false,
        },
      ];
      const [state, dispatch] = useReducer(Handle, initialTodos);
      const handleChange = a => {
          dispatch (
              {
                  type: a.complete ? 'UNDO_TODO' : 'DO_TODO',
                  id: a.id,
              }
          )
      }
    return (
        <div>
            <ul>
                {state.map(a => (
                    <li key={a.id}>
                    <label>
                        <input
                        type="checkbox"
                        checked={a.complete}
                        onChange={() => handleChange(a)}
                        />
                        {a.task}
                        
                    </label>
                    
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default UseReducerItem;
