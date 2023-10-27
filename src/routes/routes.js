const routes = (app) => {
    //Routes for TIMER model
    app.route('/timer')
    .get((req,res) => {
       
        res.send('GET request successful')
    }
    )

    .post((req,res) => 
        res.send('POST request successful') 
    )

    app.route('/timer/:noteId')
    .put((req,res)=>
        res.send('PUT request successful')
    )

    .delete((req,res) =>
        res.send('DELETE request successful')
    )
}

export default routes;