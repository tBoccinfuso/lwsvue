/**
 * Custom Mixin that has a method used to convert a property status from INT to a user friendly string.
 *
 * @since   1.0.0
 *
 * @param   {Integer} propertyStatus  The property status (1 or 0 in this example).
 *
 * @return  {String}  Return a user friendly status on the property availability.
*/

export default {
  methods: {
    userFriendlyStatus (propertyStatus) {
      let status
      propertyStatus === 1 ? status = 'Available' : status = 'Not Available'
      return status
    }
  }
}
