import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

/**
* @swagger
* /api/cat/userview/showmyCat:
*    post:
*      tags:
*        - cat-user
*      summary: get profile cat shelterview
*      description: get profile cat shelterview
*      operationId: showmyCat Userview
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ShowMyCatUserviewRequest'
*      responses:
*        '200':
*          description: Get Successful
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/ShowMyCatUserviewResponse'
*        '400':
*          description: Get Failed Due to Incorrect Input
*
* components:
*  schemas: 
*   ShowMyCatUserviewRequest:
*      type: object
*      properties:
*        login_id:
*          type: string
*          example: 113ccce3-1b58-4ce8-a5fd-cdd0426242a9
*   ShowMyCatUserviewResponse:
*      type: object
*      properties:
*        user_id:
*          type: integer
*          example: 0
*        queue_id:
*          type: integer
*          example: 0
*        cat_id:
*          type: integer
*          example: 0
*        cat_name:
*          type: string
*          example: mali
*        sex:
*          type: string
*          example: male
*        breed:
*          type: string
*          example: mixed
*        color:
*          type: string
*          example: mixed
*        cat_picture:
*          type: string
*          example: web-url
*        status:
*          type: boolean
*          example: true
*        shelter_name:
*          type: string
*          example: love
 */

export default async function handler(req, res) {
    //get my cat in user view
    //select by shelter_id

    const { login_id } = req.body

    var user_id = await getUserID(login_id)

    const { count, err } = await supabase
        .from('user_profile')
        .select('*', { count: 'exact', head: true })
        .match({ user_id: user_id })

    let query = supabase
        .from('user_profile')
        .select('user_id, queue(queue_id, cat_profile(cat_id, cat_name, sex, breed, color, detail,cat_picture, status, shelter_profile(shelter_name)))')
        .eq('user_id', user_id) 

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(count)
    console.log("Show My Cat SUCCESS!")
    res.status(200).json(data)

}

//check ShelterID
async function getUserID(login_id, user_id) {
    //query
    const { data } = await supabase.from('user_profile').select().eq('login_id', login_id)
    console.log(data)
    if (data == "" || data == null) {
        //user_id does not exist
        user_id = null
    } else {
        const query = data?.map(({ user_id }) => ({ user_id }))
        const json = JSON.stringify(query)
        user_id = json.split(':')[1].split('}]')[0]
    }
    console.log("user id ", user_id)
    return user_id
}