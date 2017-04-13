import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((e) => {
    return new Meteor.Error(400, e.message)
});


// const SearchSuggestions = (props) => {
//
//   const renderSearchSuggestion = listItem => (
//     <li key={listItem.key}>{listItem.name} {listItem.id}</li>
//   )
//
//   return (
//     <ul>
//       {props.listItems.map(SearchSuggestions)}
//     </ul>
//   )
// }
