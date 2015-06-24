module.exports = function(subsider) {
    subsider.sharedClass.find('create', true).shared = true;
    subsider.sharedClass.find('update', true).shared = false;
    subsider.sharedClass.find('upsert', true).shared = false; 
    subsider.sharedClass.find('updateAttributes', false).shared = false;
    subsider.sharedClass.find('deleteById', true).shared = false;
    subsider.sharedClass.find('find', true).shared = false; 
    subsider.sharedClass.find('findById', true).shared = false; 
    subsider.sharedClass.find('count', true).shared = false; 
    subsider.sharedClass.find('exists', true).shared = false; 
    subsider.sharedClass.find('findOne', true).shared = false;

};
