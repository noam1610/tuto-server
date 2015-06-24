module.exports = function(Subsider) {
    Subsider.sharedClass.find('create', true).shared = true;
    Subsider.sharedClass.find('update', true).shared = false;
    Subsider.sharedClass.find('upsert', true).shared = false; 
    Subsider.sharedClass.find('updateAttributes', false).shared = false;
    Subsider.sharedClass.find('deleteById', true).shared = false;
    Subsider.sharedClass.find('find', true).shared = false; 
    Subsider.sharedClass.find('findById', true).shared = false; 
    Subsider.sharedClass.find('count', true).shared = false; 
    Subsider.sharedClass.find('exists', true).shared = false; 
    Subsider.sharedClass.find('findOne', true).shared = false;

};
