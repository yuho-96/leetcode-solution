/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // 找到 a - 1节点， 这个节点插入
    let l = list1
    for (let i = 0; i < a - 1; i++) {
        l = l.next
    }


    // 找到 b节点， 这个节点的next插入 a - 1节点 + list2 的末尾
    let r = list1
    for (let i = 0; i < b; i++) {
        r = r.next
    }
    console.log(r.val, r.next)

    l.next = list2 // 插入 list2

    // r.next = list2

    // 指针节点移动到 已插入list2 的末尾
    while (l.next) {
        l = l.next
    }

    // 末尾插入b节点的next
    l.next = r.next

    return list1
};
// @lc code=end

