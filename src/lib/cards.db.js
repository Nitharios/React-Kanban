const cardsFromDB = [{
  id : '001',
  title : 'Learn React',
  priority : 'High',
  status : 'Queue',
  created_By : 'DevLeague',
  assigned_To : 'Nathan'
}, 
{
  id : '002',
  title : 'Learn Angular',
  priority : 'High',
  status : 'Done',
  created_By : 'DevLeague',
  assigned_To : 'Nathan'
}];

export const getCardsFromFakeXHR = () => new Promise(
  (resolve, reject) => {
    setTimeout(() => resolve(cardsFromDB), 500);
  }
);
