const Notification = ({ message, type=null })=>{
    const classType = {
      'A': 'add',
      'U': 'update-error',
    }
    if (message == null) return null
    console.log(classType[type])
    return <p className={classType[type]}>{message}</p>
}

export default Notification;