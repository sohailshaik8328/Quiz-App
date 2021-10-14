import { NavLink } from 'react-router-dom';

function Levels (props) {

    return (
      <section className=''>
        <h2 className='font-bold text-2xl text-center mb-10'>Select Difficulty Level</h2>
        <div className='flex justify-center mb-5'>
          <button
            onClick={(event) => {
              props.handleDifficulty(event, 'easy');
            }}
            className={
              props.level === 'easy' ? 'px-3 py-2 rounded-md text-white font-bold mr-5  bg-red-600' : 'px-3 py-2 rounded-md text-white font-bold mr-5 bg-blue-800'
            }
          >
            Easy
          </button>
          <button
            onClick={(event) => {
              props.handleDifficulty(event, 'medium');
            }}
            className={
              props.level === 'medium' ? 'px-3 py-2 rounded-md text-white font-bold mr-5 bg-red-600' : 'px-3 py-2 rounded-md text-white font-bold mr-5 bg-blue-800'
            }
          >
            Medium
          </button>
          <button
            onClick={(event) => {
              props.handleDifficulty(event, 'hard');
            }}
            className={
              props.level === 'hard' ? 'px-3 py-2 rounded-md text-white font-bold mr-5 bg-red-600' : 'px-3 py-2 rounded-md text-white font-bold mr-5 bg-blue-800'
            }
          >
            Hard
          </button>
        </div>

        {props.category && props.level ? (
          <div className='mb-5 flex justify-center'>
            <NavLink
              to={`/quiz/${props.category.id}/${props.level}`}
              className='px-3 py-2 rounded-md text-white font-bold mr-5 bg-yellow-600 hover:bg-green-600'
            >
              {' '}
              Start Quiz
            </NavLink>
          </div>
        ) : (
          ''
        )}
      </section>
    );
  }

export default Levels;