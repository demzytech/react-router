import React, { useState } from 'react';
import Caro from '../Caro';


const Poll = () => {
  const [votes, setVotes] = useState({
    fifa: 0,
    pes: 0,
  });

  const handleVote = (selectedGame) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selectedGame]: prevVotes[selectedGame] + 1,
    }));
  };

  return (
    <div>
      <h2 className='htty'>FIFA vs PES Poll</h2>
      <div>
        <h3 className='fifs'>FIFA</h3>

        <p>Rating: 9.5/10</p>
        <div className='deyu'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <p>
          Votes: {votes.fifa}
        </p>
        <button onClick={() => handleVote('fifa')} className='btn2222'><h4 className='tnt'>Vote FIFA</h4></button>
      </div>
      <div>
        <h3>PES</h3>
        <Caro/>
        <p className='rating'>Rating: 9.0/10</p>
        <div className='deyu'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <p>
          Votes: {votes.pes}
        </p>
        <button onClick={() => handleVote('pes')}>Vote PES</button>
      </div>
    </div>
  );
};

export default Poll;
