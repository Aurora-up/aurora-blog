---
title: 二叉树、线索二叉树的代码实现
index: false
icon: data_struct
category:
  - 数据结构
---

## 二叉树

### 二叉树结点

:::code-tabs#language

@tab rust#rust

```rust

```

@tab java#java

```java {2,15,16}

```

@tab c++#c++

```cpp {1,12,13}
template <typename T> struct TreeNode {
  T value;
  TreeNode<T> *left;
  TreeNode<T> *right;
  explicit TreeNode<T>(T value, TreeNode<T> *left = nullptr,
                       TreeNode<T> *right = nullptr,)
      : value(value), left(left), right(right), parent(parent) {}
};
```

:::

### 二叉树

:::code-tabs#language

@tab rust#rust

```rust

```

@tab java#java

```java {2,15,16}

```

@tab c++#c++

```cpp {1,12,13}
template <typename T> class BinaryTree {
public:
  TreeNode<T> *root;
  explicit BinaryTree(TreeNode<T> *root = nullptr) : root(root) {}
  explicit BinaryTree(std::vector<T> nodes) { BinaryTree<T>::from_vec(nodes); }
  ~BinaryTree() {
    if (root)
      destruct_binary(root);
  }

  /**
   * @brief 从层序遍历存储的节点的数组中构建二叉链表
   * @param nodes 节点数组
   */
  void from_vec(const std::vector<T> &nodes) {
    if (nodes.size() == 0)
      return;
    std::queue<TreeNode<T> *> q;
    TreeNode<T> *cur = new TreeNode<T>(nodes[0]);
    q.push(cur);
    int i = 1;
    while (!q.empty()) {
      TreeNode<T> *node = q.front();
      q.pop();
      if (nodes[i] != null_t) {
        node->left = new TreeNode<T>(nodes[i]);
        q.push(node->left);
      }
      i++;
      if (nodes[i] != null_t) {
        node->right = new TreeNode<T>(nodes[i]);
        q.push(node->right);
      }
      i++;
    }
    this->root = cur;
  }
  /**
   * @brief 层序遍历
   * @return std::vector<T> 层序遍历顺序
   */
  std::vector<T> bfs() {
    std::vector<T> ans;
    if (this->root == nullptr)
      return ans;
    TreeNode<T> *cur = this->root;
    std::queue<TreeNode<T> *> q;
    q.push(cur);
    while (!q.empty()) {
      TreeNode<T> *node = q.front();
      q.pop();
      ans.emplace_back(node->value);
      if (node->left != nullptr)
        q.push(node->left);
      if (node->right != nullptr)
        q.push(node->right);
    }
    return ans;
  }
  /**
   * @brief 中序非递归遍历 (左根右)
   * @return std::vector<T>  中序遍历顺序
   */
  std::vector<T> in_order() {
    std::vector<T> ans;
    if (this->root == nullptr)
      return ans;
    TreeNode<T> *node = this->root;
    std::stack<TreeNode<T> *> st;
    while (node != nullptr || !st.empty()) {
      while (node != nullptr) {
        st.push(node);
        node = node->left;
      }
      if (!st.empty()) {
        node = st.top();
        st.pop();
        ans.emplace_back(node->value);
        node = node->right;
      }
    }
    return ans;
  }
  /**
   * @brief 先序非递归遍历 (根左右)
   * @return std::vector<T> 先序遍历顺序
   */
  std::vector<T> pre_order() {
    std::vector<T> ans;
    if (this->root == nullptr)
      return ans;
    TreeNode<T> *node = this->root;
    std::stack<TreeNode<T> *> st;
    while (node != nullptr || !st.empty()) {
      while (node != nullptr) {
        st.push(node);
        ans.emplace_back(node->value);
        node = node->left;
      }
      if (!st.empty()) {
        node = st.top();
        st.pop();
        node = node->right;
      }
    }
    return ans;
  }
  /**
   * @brief 后续非递归遍历 (左右根) 利用镜像二叉树翻转
   * @return std::vector<T>
   */
  std::vector<T> post_order() {
    std::vector<T> ans;
    if (this->root == nullptr)
      return ans;
    TreeNode<T> *node = this->root;
    std::stack<TreeNode<T> *> st;
    while (node != nullptr || !st.empty()) {
      while (node != nullptr) {
        st.push(node);
        ans.emplace_back(node->value);
        node = node->right;
      }
      if (!st.empty()) {
        node = st.top();
        st.pop();
        node = node->left;
      }
    }
    std::reverse(ans.begin(), ans.end());
    return ans;
  }
    /**
   * @brief 后序遍历的非递归算法
   * 后序遍历为 "左右根"， 所以在结点元素出栈之前必须保证其左右子结点都被遍历；
   * 可以使用一个标识 visited 标识当前结点的左右子结点是否都被遍历过；
   * @return std::vector<T> 后序遍历序列
   */
  std::vector<T> real_post_order() {
    std::vector<T> ans;
    if (root == nullptr) return ans;
    TreeNode<T>* cur = this->root;
    std::stack<TreeNode<T> *> st;
    // 标识, 用于标识 "当前结点" 的左右子结点是否都被遍历
    bool visited = false;   // true 表示都被遍历, false 则反之
    while (cur != nullptr || !st.empty()) {
      while (cur != nullptr && !visited) {
        st.push(cur);
        cur = cur->left;
      }
      TreeNode<T>* top_node = st.top();
      // 1. 即将出栈的结点的 "右子结点" 不为空 并且其 左右子结点未全遍历完
      if (top_node->right != nullptr && !visited) {
        // 将栈顶元素的 "右子结点" 入栈
        cur = top_node->right;
      }
      // 2. 即将出栈的结点的 "右子结点" 为空 或者其 左右子结点已全遍历完
      else {
        st.pop();    // 此时栈顶元素可以出栈
        ans.emplace_back(top_node->value);
        if (st.empty()) break;
        /* 栈中相邻两个元素为 "父子结点" (靠近栈顶的为父结点)
         当 "旧栈顶元素" 和 "新栈顶元素"的右子结点 相等时，也即：已出栈的元素为当前栈顶元素的右子结点，
         说明此时栈顶元素的 "左右子结点" 均已被访问过，此时栈顶可以出栈。*/
        if (top_node == st.top()->right) visited = true;
        // 已出栈结点 为 当前栈顶结点的左子结点，此时当前栈顶结点的右子结点还未被访问，visited 需要为 false
        else visited = false;  
        // 访问 "右子树"
        cur = st.top()->right;
      }
    }
    return ans;
  }
  /**
   * @brief 中序遍历 (递归)
   * @param cur 当前结点
   * @param ans 遍历结果
   */
  void in_order_rec(const TreeNode<T>* cur, std::vector<T>& ans) {
    if (cur == nullptr) return;
    if (cur->left != nullptr) in_order_rec(cur->left, ans);
    ans.emplace_back(cur->value);
    if (cur->right != nullptr) in_order_rec(cur->right, ans);
  }

  /**
   * @brief 先序遍历 (递归)
   * @param cur 当前结点
   * @param ans 遍历结果
   */
  void pre_order_rec(const TreeNode<T>* cur, std::vector<T>& ans) {
    if (cur == nullptr) return;
    ans.emplace_back(cur->value);
    if (cur->left != nullptr) pre_order_cur(cur->left, ans);
    if (cur->right != nullptr) pre_order_rec(cur->right, ans); 
  } 

  /**
   * @brief 后序遍历 (递归)
   * @param cur 当前结点
   * @param ans 遍历结果
   */
  void post_order_rec(const TreeNode<T>* cur, std::vector<T>& ans) {
    if (cur == nullptr) return;
    if (cur->left != nullptr) pre_order_cur(cur->left, ans);
    if (cur->right != nullptr) pre_order_rec(cur->right, ans); 
    ans.emplace_back(cur->value);
  }

private:
  T null_t = T(); // 模板默认值, 替代 NULL
  std::allocator<TreeNode<T>> allocator_;
  void destruct_binary(TreeNode<T> *node) {
    if (node->left)
      destruct_binary(node->left);
    if (node->right)
      destruct_binary(node->right);
    allocator_.destroy(node);
    allocator_.deallocate(node, 1);
  }
};
```

:::

## 线索二叉树

### 线索二叉树节点

:::code-tabs#language

@tab rust#rust

```rust

```

@tab java#java

```java {2,15,16}

```

@tab c++#c++

```cpp {1,12,13}
enum node_tag {
  child_node, // 子结点
  order_node, // 前驱或者后继结点
};

template <typename T> struct TreeNode {
  T value;
  TreeNode<T> *left;
  TreeNode<T> *right;

  /* 线索二叉树节点所需 */
  TreeNode<T> *parent;
  node_tag left_tag = child_node;
  node_tag right_tag = child_node;
  

  explicit TreeNode<T>(T value, TreeNode<T> *left = nullptr,
                       TreeNode<T> *right = nullptr,
                       TreeNode<T> *parent = nullptr)
      : value(value), left(left), right(right), parent(parent) {}
};
```

:::

### 线索二叉树

:::code-tabs#language

@tab rust#rust

```rust

```

@tab java#java

```java {2,15,16}

```

@tab c++#c++

```cpp {1,12,13}
// 线索化类型
enum threaded_mode {
  in_order,   // 中序线索化
  pre_order,  // 先序线索化
  post_order, // 后序线索化
};

template <typename T> class ThreadedBinaryTree {
public:
  TreeNode<T> *root;
  /**
   * @brief 从存储层序遍历二叉树的数组中构建对应的线索化二叉树
   * @param nodes 层序遍历结点数组
   * @param mode 线索化模式
   */
  void from_vec(std::vector<T> nodes, threaded_mode mode) {
    if (nodes.empty())
      return;
    TreeNode<T> *cur = new TreeNode<T>(nodes[0]);
    std::queue<TreeNode<T> *> q;
    q.push(cur);
    int i = 1;
    while (!q.empty()) {
      TreeNode<T> *node = q.front();
      q.pop();
      if (nodes[i] != null_t) {
        node->left = new TreeNode<T>(nodes[i]);
        node->left->parent = node;
        q.push(node->left);
      }
      i += 1;
      if (nodes[i] != null_t) {
        node->right = new TreeNode<T>(nodes[i]);
        node->right->parent = node;
        q.push(node->right);
      }
      i += 1;
    }
    this->root = cur;
    // 线索化
    switch (mode) {
    case threaded_mode::in_order:
      threaded_in_order_tree(this->root);
      break;
    case threaded_mode::pre_order:
      threaded_pre_order_tree(this->root);
      break;
    case threaded_mode::post_order:
      threaded_post_order_tree(this->root);
      break;
    default:
      std::cout << "请制定要线索化类型" << std::endl;
      break;
    }
  }
  /**
   * @brief 构建中序线索二叉树
   * @param node 二叉树根节点
   */
  void threaded_in_order_tree(TreeNode<T> *node) {
    if (node != nullptr) {
      in_order_helper(node);
    }
  }
  /**
   * @brief 构建先序线索二叉树
   * @param node 二叉树根节点
   */
  void threaded_pre_order_tree(TreeNode<T> *node) {
    if (node != nullptr) {
      pre_order_helper(node);
    }
  }
  /**
   * @brief 构建后序线索二叉树
   * @param node 二叉树根节点
   */
  void threaded_post_order_tree(TreeNode<T> *node) {
    if (node != nullptr) {
      post_order_helper(node);
    }
  }

  // ========== 中序线索化遍历  ==========
  /**
   * @brief 对中序线索化后的二叉树进行遍历
   * @return std::vector<T> 遍历结果
   */
  std::vector<T> in_order_tbt() {
    std::vector<T> ans;
    for (TreeNode<T> *p = take_inorder_first(root); p != nullptr;
         p = next_node_inorder(p))
      ans.emplace_back(p->value);
    return ans;
  }
  /**
   * @brief 获取二叉树中第一个被中序遍历的结点
   * @param node 二叉树根结点
   * @return TreeNode<T>* 第一个被中序遍历的结点
   */
  TreeNode<T> *take_inorder_first(TreeNode<T> *node) {
    while (node->left_tag == node_tag::child_node) {
      node = node->left;
    }
    return node;
  }
  /**
   * @brief 在中序线索二叉树中寻找结点的后继结点
   * @param node 结点
   * @return TreeNode<T>* 结点的中序后继结点
   */
  TreeNode<T> *next_node_inorder(TreeNode<T> *node) {
    if (node == nullptr)
      return nullptr;
    if (node->right_tag == node_tag::child_node)
      return take_inorder_first(node->right);
    else
      return node->right;
  }
  /**
   * @brief 在中序线索二叉树中寻找结点的前驱结点
   * @param node 结点
   * @return TreeNode<T>* 结点的中序前驱结点
   */
  TreeNode<T> *last_node_inorder(TreeNode<T> *node) {
    if (node == nullptr)
      return nullptr;
    if (node->left_tag == node_tag::child_node) {
      node = node->left;
      while (node->right_tag == node_tag::child_node) {
        node = node->right;
      }
      return node;
    } else
      return node->left;
  }
  // ===================================

  // ========== 先序线索化遍历  ===========
  /**
   * @brief 对先序线索化的二叉树进行遍历
   * @return std::vector<T> 遍历结果
   */
  std::vector<T> pre_order_tbt() {
    std::vector<T> ans;
    for (TreeNode<T> *p = last_node_preorder(root->left); p != nullptr;
         p = next_node_preorder(p))
      ans.emplace_back(p->value);
    return ans;
  }
  /**
   * @brief 寻找子树中最后一个被前序遍历的结点,即子树中 [最右最左] 结点
   * @param node 子树根结点
   * @return TreeNode<T>* 该子树中最后一个被前序遍历的结点
   */
  TreeNode<T> *take_preorder_end(TreeNode<T> *node) {
    while (true) {
      while (node->right_tag == node_tag::child_node) {
        node = node->right;
      }
      while (node->left_tag == node_tag::child_node) {
        node = node->left;
      }
      if (node->left_tag == node_tag::order_node &&
          node->right_tag == node_tag::order_node)
        break;
    }
    return node;
  }
  /**
   * @brief 在先序线索二叉树中寻找结点的后继结点
   * @param node 结点
   * @return TreeNode<T>* 结点的先序后继结点
   */
  TreeNode<T> *next_node_preorder(TreeNode<T> *node) {
    if (node->left != nullptr && node->left_tag == node_tag::child_node) {
      return node->left;
    } else {
      return node->right;
    }
  }
  /**
   * @brief 在先序线索二叉树中寻找结点的前驱结点 (借助结点的父结点完成)
   * @param node 结点
   * @return TreeNode<T>* 结点的先序前驱结点
   */
  TreeNode<T> *last_node_preorder(TreeNode<T> *node) {
    if (node == nullptr)
      return nullptr;
    TreeNode<T> *parent = node->parent;
    if (parent != nullptr) {
      if (parent->right == node && parent->left != nullptr)
        return take_preorder_end(parent->left);
    }
    return parent;
  }
  // ===================================

  // ========== 后序线索化遍历  ===========
  /**
   * @brief 对后序线索化的二叉树进行遍历
   * @return std::vector<T> 遍历结果
   */
  std::vector<T> post_order_tbt() {
    std::vector<T> ans;
    ans.emplace_back(this->root->value);
    for (TreeNode<T> *p = last_node_postorder(this->root); p != nullptr;
         p = last_node_postorder(p))
      ans.emplace_back(p->value);
    std::reverse(ans.begin(), ans.end());
    return ans;
  }
  /**
   * @brief 在后序线索二叉树中寻找结点的前驱结点
   * @param node 节点
   * @return TreeNode<T>* 节点的后序前驱结点
   */
  TreeNode<T> *last_node_postorder(TreeNode<T> *node) {
    if (node->right_tag == child_node && node->right != nullptr)
      return node->right;
    else
      return node->left;
  }
  /**
   * @brief 寻找子树中第一个被后序遍历的结点, 即子树中 循环[最左最右]
   * @param node 结点
   * @return TreeNode<T>* 该结点子树中第一个被后序遍历的结点
   */
  TreeNode<T> *take_postorder_first(TreeNode<T> *node) {
    while (true) {
      while (node->left_tag == node_tag::child_node && node->left != nullptr) {
        node = node->left;
      }
      while (node->right_tag == node_tag::child_node &&
             node->right != nullptr) {
        node = node->right;
      }
      if (node->left_tag == node_tag::order_node &&
          node->right_tag == node_tag::order_node)
        break;
    }
    return node;
  }
  /**
   * @brief 在后序线索二叉树中寻找结点的后继结点 (结束父结点实现)
   * @param node 结点
   * @return TreeNode<T>* 结点的后序后继结点
   */
  TreeNode<T> *next_node_postorder(TreeNode<T> *node) {
    if (node == nullptr)
      return nullptr;
    TreeNode<T> *parent = node->parent;
    if (parent != nullptr) {
      if (parent->left == node && parent->right != nullptr)
        return take_postorder_first(parent->right);
    } else {
      return node->parent;
    }
  }
  // ==============================

private:
  T null_t = T();             // T 的默认值, NULL 的替代品
  TreeNode<T> *pre = nullptr; // 全局父结点
  /**
   * @brief 中序线索化 (边遍历边线索化)
   * @param node 二叉树根节点
   */
  void in_order_helper(TreeNode<T> *node) {
    if (node == nullptr)
      return;
    in_order_helper(node->left);
    if (node->left == nullptr) {
      node->left = pre;
      node->left_tag = node_tag::order_node;
    }
    if (node->right == nullptr)
      node->right_tag = node_tag::order_node;
    if (pre != nullptr && pre->right == nullptr)
      pre->right = node;
    pre = node;
    in_order_helper(node->right);
  }
  /**
   * @brief 先序线索化 (边遍历边线索化)
   * @param node 二叉树根节点
   */
  void pre_order_helper(TreeNode<T> *node) {
    if (node == nullptr)
      return;
    if (node->left == nullptr) {
      node->left = pre;
      node->left_tag = node_tag::order_node;
    }
    if (node->right == nullptr)
      node->right_tag = node_tag::order_node;
    if (pre != nullptr && pre->right == nullptr)
      pre->right = node;
    pre = node;
    if (node->left_tag == node_tag::child_node)
      pre_order_helper(node->left);
    pre_order_helper(node->right);
  }
  /**
   * @brief 后序线索化 (边遍历边线索化)
   * @param node 二叉树根节点
   */
  void post_order_helper(TreeNode<T> *node) {
    if (node == nullptr)
      return;
    post_order_helper(node->left);
    post_order_helper (node->right);
    if (node->left == nullptr) {
      node->left = pre;
      node->left_tag = node_tag::order_node;
    }
    if (node->right == nullptr)
      node->right_tag = node_tag::order_node;
    if (pre != nullptr && pre->right == nullptr) {
      pre->right = node;
    }
    pre = node;
  }
};
```

:::