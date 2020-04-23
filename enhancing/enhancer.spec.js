const enhancer = require('./enhancer.js');
// test away!

describe ('enhance.js', () => {
    it('no errors', () => {
        expect(true).toBeTruthy();
    })
    describe ('.enhancer()', function(){
        it('return an item', function (){
            expect(enhancer({
                name: "skateboard", 
                enhancement:10,
                durability: 100
            })).toEqual({
                name: "skateboard",
                enhancement: 10,
                durability: 100 
            })
        })
    })
    describe("enhancer.js", () => {
        describe("fail()", () => {
          it("if enhancement is 0 return the item unchanged", () => {
            const item = { name: "skateboard", enhancement: 0, durability: 50 };
            const failedItem = enhancer.fail(item);
      
            expect(failedItem.enhancement).toEqual(0);
            expect(failedItem.name).toBe("skateboard");
            expect(failedItem.durability).toEqual(45);
          });
          it("if enhancement is less than 15 then decrease the durability by 5", () => {
            const item = { name: "skateboard", enhancement: 10, durability: 50 };
            const failedItem = enhancer.fail(item);
      
            expect(failedItem.durability).toEqual(45);
          });
          it("if enhancement is greater than or equal to 15 the durability is decreased by 10", () => {
            const item = { name: "skateboard", enhancement: 15, durability: 50 };
            const failedItem = enhancer.fail(item);
      
            expect(failedItem.durability).toEqual(40);
          });
          it("if the enhancement is greater than 16 the enhancement level decreases by 1", () => {
            const item = { name: "skateboard", enhancement: 17, durability: 50 };
            const failedItem = enhancer.fail(item);
      
            expect(failedItem.enhancement).toEqual(16);
          });
        });
      });
      
      describe("enhancer.js", () => {
        describe("repair()", () => {
          it("resets the durability of the item object to 100", () => {
            const item = { name: "skateboard", enhancement: 10, durability: 50 };
            const repairedItem = enhancer.repair(item);
      
            expect(repairedItem.durability).toEqual(100);
          });
      
          it("leaves the vlaue for enhancement unchanged", () => {
            const item = { name: "skateboard", enhancement: 10, durability: 50 };
            const repairedItem = enhancer.repair(item);
            expect(repairedItem.enhancement).toEqual(10);
          });
          it("leaves the value of name unchanged", () => {
            const item = { name: "skateboard", enhancement: 10, durability: 50 };
            const repairedItem = enhancer.repair(item);
      
            expect(repairedItem.name).toEqual("skateboard");
          });
        });
      });
      
      describe("enhancer.js", () => {
        describe("get()", () => {
          it("if the enhancement is 0 then the name is not changed", () => {
            const item = { name: "skateboard", durability: 70, enhancement: 0 };
      
            const newItem = enhancer.get(item);
      
            expect(newItem).toEqual(item);
          });
          it("if the enhancement is greater than zero then append the enhancement level to the name with a plus sign and enclose it in brackets", () => {
            const item = { name: "skateboard", durability: 70, enhancement: 15 };
      
            const newItem = enhancer.get(item);
      
            expect(newItem.name).toEqual(`[+15] skateboard`);
          });
        });
      });
})