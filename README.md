# express_crash_crouse
 ## Express 
    เป็น web app สำหรับ node js ข้อดี เล็ก , ทำงานเร็ว , ไม่ได้บังคับว่าต้องใช้เครื่องมืออะไรในการแก้ปัญหา
    นิยมไปนำไปทำ web api เเละ web app
## Route 
    ถูก build in มากับ exprees เลย (route ใช้ในการ บอกว่าเราต้องต่อตัว request ในรูปแบบไหน)
### Restful api (REpresentational State Transfer)
    เป็น guideline บอกกับเราว่า ถ้าต้องการสร้าง api ผ่าน HTTP protocol ว่าต้อง มีคุณสมบัติอะไรบ้าง (CRUD oparation)
    1. Create ต้องสร้างข้อมูลได้ -> POST
    2. Read ต้องอ่านข้อมูลได้ -> GET
    3. Update ต้องอัพเดตข้อมูลได้ -> PUT
    4. Delete ต้องลบ ข้อมูลได้ -> DELETE
    โดย POST GET PUT DELETE เราจะเรียกมันว่า RESTful API
### Express Router
    ถ้าเรามี api เยอะ ๆ เเละเราต้องการใช้ไฟล์แยกเพื่อไม่ไห้ดูหน้ารวมมี api เยอะเกินไป เเละ เพื่อทำให้ดูง่ายขึ้น

## Request & Responses
    Request  เป็น object จะประกอบไปด้วยข้อมูลต่าง ๆ ที่ส่งไปหา Server 
        - req.params อ่าน variable ที่เรา set ให้ route ex. /:id
        - req.query อ่านค่า queryString จาก url
        - req.body อ่านข้อมูลที่มาจาก body
    Responses เป็น object มีข้อมูล medthods ต่าง ๆ ที่เราสามารถใช้ในการส่งข้อมูลกลับไปหา client ได้
        - res.send() ใช้ส่งข้อมูลปกติกลับไป client
        - res.sendFile() ใช้ส่ง file กลับไปให้ client
        - res.sendStatus() ใช้ set status http กลับไปให้ client
        - res.json() ส่งข้อมูลเป็น json กลับไปให้ client

## Middleware
    มันคือ function ที่ถูกเรียก auto โดย express โดย middleware นั้นจะถูกเรียก ก่อนที่จะมาเรียก function ของเรา
    ตัวอย่าง การทำงานของ middleware
            incoming request -> middleware I -> middleware II -> user-defined function
            1. มี request เข้ามา 
            2. express จะไป check ว่ามี middleware อยู่ไหม ถ้ามีก็ทำงาน
            3. เเล้วจะ check ตัวต่อไปจนไม่มี middleware เเล้ว 
            4. เมื่อ check ว่าไม่มี middleware เเล้ว ภึงจะมาเรียกใช้ function ของเรา

## Template Engines
    เป็นเครื่องมือที่ช้วยให้เราสร้างข้อมูลในหน้า html ได้ โดยจะทำงานโดยที่ Template Engines จะเป็นตัวคุม html กับ data ไว้ เเล้วทำการ render หน้า html
    https://expressjs.com/en/resources/template-engines.html สำหรับดู Template Engines

