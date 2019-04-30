
// export const handleCheck = (ind, event) => ({
//   type: 'CHECK_ROOM',
//   ind,
//   target: event.target
// })
export const CHECK_ROOM = 'CHECK_ROOM';

export function handleCheck (ind, event) {
  console.log(ind, event, '88');
  return {
    type: 'CHECK_ROOM',
      ind,
      target: event.target
  }
}

export const handleSubmit = () =>({
	type: 'SUBMIT_INFO'
})
export const handleChange = (e, ind, str) => ({
  type: 'CHANGE_ADULT_CHILDREN_VALUE',
  ind,
  target: e.target,
  str
});
