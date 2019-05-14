/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = async function(cb) {
  //sails.config.appName = "Sails Chat App";


  // Generate Chat Messages
 try {
  let messageCount = ChatMessage.count();
	console.log("TCL: messageCount", messageCount)
  if(messageCount > 0){
    return; // don't repeat messages
  }

  let users = await User.find();
	console.log("TCL: USERS 1", users[0].id)
	console.log("TCL: USERS 2", users[1].id)
	console.log("TCL: USERS 3", users[2].id)
  if(users.length >= 3) {
    console.log("Generating messages...")

    let msg1 = await ChatMessage.create({
      message: 'Hey Everyone! Welcome to the community!',
      createdBy: users[1].id
    });
    console.log("Created Chat Message: " + msg1);

    let msg2 = await ChatMessage.create({
      message: "How's it going?",
      createdBy: users[2].id
    });
    console.log("Created Chat Message: " + msg2);

    let msg3 = await ChatMessage.create({
      message: 'Super excited!',
      createdBy: users[0].id
    });
    console.log("Created Chat Message: " + msg3);

  } else {
    console.log('skipping message generation');
  }
}catch(err){
  console.error(err);
}


cb(); 

};
