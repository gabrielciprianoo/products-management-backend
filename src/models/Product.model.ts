import { Table, Column, Model, DataType, Default  } from "sequelize-typescript";

/**
 * @swagger
 * components:
 *   schemas:
 *    Product:
 *      type: object
 *      properties:
 *          id:
 *            type: integer
 *            description: Unique identifier for the product
 *            example:
 *              id: 1
 *          name:
 *            type: string
 *            description: Name of the product
 *            example:
 *              name: "Sample Product"
 *          price:
 *           type: number
 *           description: Price of the product
 *           example:
 *             price: 19.99
 *          availability:
 *           type: boolean
 *           description: Availability status of the product
 *           example:
 *            availability: true
 *
 */

@Table({
    tableName: 'products'
})

class Product extends Model { 
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string;

    @Column({
        type: DataType.FLOAT
    })
    declare price: number;
    
    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    declare availability: boolean;
    
}

export default Product;